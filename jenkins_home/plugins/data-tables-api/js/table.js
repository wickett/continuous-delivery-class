/* global jQuery3, luxon, tableDataProxy, bootstrap5 */
jQuery3(document).ready(function () {
    /**
     * Binds all tables that have the class 'data-table' to a new JQuery DataTables instance.
     */
    function bindTables($) {
        /**
         * Creates the data table instance for the specified table element.
         */
        function createDataTable(table) {
            const toolbar = $(table).next();
            let toolbarContent;
            let bottom;
            if (toolbar.length && toolbar.children().length > 0) {
                toolbarContent = toolbar;
                bottom = ['pageLength', 'info'];
            }
            else {
                toolbarContent = 'pageLength';
                bottom = 'info';
            }
            const defaultConfiguration = {
                layout: {
                    topStart: toolbarContent,
                    topEnd: 'search',
                    bottomStart: bottom,
                    bottomEnd: 'paging'
                },
                stateSave: true,
                language: {
                    emptyTable: 'Loading - please wait ...'
                },
                responsive: {
                    details: false
                },
                deferRender: true,
                paging: true,
                pagingType: 'numbers', // page number button only
                order: [[1, 'asc']], // default order, if not persisted yet
                columnDefs: [
                    {
                        targets: 'nosort', // All columns with the '.nosort' class in the <th>
                        orderable: false
                    },
                    {
                        targets: 'text-end', // All columns with the '.text-end' class in the <th>
                        className: 'text-end'
                    },
                    {
                        targets: 'date', // All columns with the '.date' class in the <th>
                        render: function (data, type, _row, _meta) {
                            if (type === 'display') {
                                if (data === 0) {
                                    return '-';
                                }
                                const dateTime = luxon.DateTime.fromMillis(data * 1000);
                                return '<span data-bs-toggle="tooltip" data-bs-placement="top" title="'
                                    + dateTime.toLocaleString(luxon.DateTime.DATETIME_SHORT) + '">'
                                    + dateTime.toRelative({locale: 'en'}) + '</span>';
                            }
                            return data;
                        }
                    },
                    {
                        targets: 'percentage', // All columns with the '.percentage' class in the <th>
                        className: 'text-end',
                        render: function (data, type, _row, _meta) {
                            if (isNaN(data)) {
                                return data;
                            }
                            return Number(data).toLocaleString(undefined,
                                {style: 'percent', minimumFractionDigits: 2});
                        }
                    },
                    {
                        targets: 'hidden', // All columns with the '.hidden' class in the <th>
                        visible: false,
                        searchable: true,
                        orderable: false // There is no point in allowing sort by this column if it's not visible.
                    }
                ],
                columns: JSON.parse(table.attr('data-columns-definition'))
            };
            const tableConfiguration = JSON.parse(table.attr('data-table-configuration'));
            // overwrite/merge the default configuration with values from the provided table configuration
            const mergedConfiguration = Object.assign(defaultConfiguration, tableConfiguration);
            const dataTable = table.DataTable(mergedConfiguration);
            // add the buttons to the top of the table
            if (tableConfiguration.buttons) {
                dataTable
                    .buttons()
                    .container()
                    .addClass('float-none mb-3')
                    .prependTo($(dataTable.table().container()).closest('.table-responsive'));
            }

            return dataTable;
        }

        /**
         * Loads the content for the specified table element via an Ajax call.
         */
        function loadTableData(table, dataTable) {
            if (!table[0].hasAttribute('isLoaded')) {
                table.attr('isLoaded', 'false');
                tableDataProxy.getTableRows(table.attr('id'), function (t) {
                    (function () {
                        const model = JSON.parse(t.responseObject());
                        dataTable.rows.add(model).draw();
                        dataTable.columns.adjust().draw();

                        table.attr('isLoaded', 'true');
                        table.emptyTable = 'No records found';
                        table.find('.details-icon-close').each(function () {
                            $(this).hide();
                        });
                    })();
                });
            }
        }

        const allTables = $('table.data-table');
        allTables.each(function () {
            const table = $(this);
            const id = table.attr('id');
            const dataTable = createDataTable(table);

            // Add event listener for opening and closing details
            table.on('click', 'div.details-control', function () {
                const tr = $(this).parents('tr');
                const row = dataTable.row(tr);

                const openRowButton = tr.find('.details-icon-open');
                const closeRowButton = tr.find('.details-icon-close');
                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass('shown');
                    openRowButton.show();
                    closeRowButton.hide();
                }
                else {
                    row.child($(this).data('description')).show();
                    tr.addClass('shown');
                    openRowButton.hide();
                    closeRowButton.show();
                }
            });

            table.on('draw.dt', function () {
                // Re-enable tooltips
                table.find('[data-bs-toggle="tooltip"]').each(function () {
                    const tooltip = new bootstrap5.Tooltip($(this)[0]);
                    tooltip.enable();
                });

                // Re-draw details icon state
                dataTable.rows().every(function (rowIndex, tableLoop, rowLoop) {
                    const tr = $(this.node());
                    const openRowButton = tr.find('.details-icon-open');
                    const closeRowButton = tr.find('.details-icon-close');

                    if (this.child.isShown()) {
                        openRowButton.hide();
                        closeRowButton.show();
                    }
                    else {
                        openRowButton.show();
                        closeRowButton.hide();
                    }
                } );
            });

            if (table.is(":visible")) {
                loadTableData(table, dataTable);
            }
            else {
                table.on('becameVisible', function () {
                    loadTableData(table, dataTable);
                });
            }
        });
    }

    (function ($) {
        $.extend(true, $.fn.dataTable.defaults, {
            mark: {
                className: 'highlight'
            },
            responsive: {
                details: false
            }
        });
        bindTables($);
    })(jQuery3);
});
