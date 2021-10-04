/**********************************************************************
 * 
 * Code generated automatically by DirectJNgine
 * Copyright (c) 2009, Pedro Agull? Soliveres
 * 
 * DO NOT MODIFY MANUALLY!!
 * 
 **********************************************************************/

Ext.namespace( 'NX.direct.api');
Ext.namespace( 'NX.direct');

NX.direct.api.PROVIDER_BASE_URL=window.location.protocol + '//' + window.location.host + '/' + (window.location.pathname.split('/').length>2 ? window.location.pathname.replace(/^\/|\/$/g, '') + '/' : '')  + 'service/extdirect';

NX.direct.api.POLLING_URLS = {
  rapture_State_get : NX.direct.api.PROVIDER_BASE_URL + '/poll/rapture_State_get' /* () => java.util.Map -- calls org.sonatype.nexus.rapture.internal.state.StateComponent.getState */, 
  coreui_Repository_readStatus : NX.direct.api.PROVIDER_BASE_URL + '/poll/coreui_Repository_readStatus' /* () => java.util.List -- calls org.sonatype.nexus.coreui.RepositoryComponent.readStatus */
}

NX.direct.api.REMOTING_API = {
  url: NX.direct.api.PROVIDER_BASE_URL,
  type: 'remoting',
  namespace: NX.direct,
  actions: {
    coreui_Webhook: [
      {
        name: 'listWithTypeRepository'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'listWithTypeGlobal'/*() => java.util.List */,
        len: 0,
        formHandler: false
      }
    ],
    capability_Capability: [
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'enable'/*(String) => void */,
        len: 1,
        formHandler: false
      },
      {
        name: 'disable'/*(String) => void */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateNotes'/*(org.sonatype.nexus.coreui.internal.capability.CapabilityNotesXO) => org.sonatype.nexus.coreui.internal.capability.CapabilityXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.internal.capability.CapabilityXO) => org.sonatype.nexus.coreui.internal.capability.CapabilityXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'create'/*(org.sonatype.nexus.coreui.internal.capability.CapabilityXO) => org.sonatype.nexus.coreui.internal.capability.CapabilityXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readTypes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'remove'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Role: [
      {
        name: 'readFromSource'/*(String) => java.util.List */,
        len: 1,
        formHandler: false
      },
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readReferences'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readSources'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.RoleXO) => org.sonatype.nexus.coreui.RoleXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'create'/*(org.sonatype.nexus.coreui.RoleXO) => org.sonatype.nexus.coreui.RoleXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'remove'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    firewall_RepositoryStatus: [
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      }
    ],
    rapture_State: [
    ],
    coreui_Blobstore: [
      {
        name: 'fillPolicies'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readGroups'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readQuotaTypes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readNames'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'promoteToGroup'/*(String) => org.sonatype.nexus.coreui.BlobStoreXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readGroupable'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => java.util.List */,
        len: 1,
        formHandler: false
      },
      {
        name: 'defaultWorkDirectory'/*() => org.sonatype.nexus.coreui.PathSeparatorXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.BlobStoreXO) => org.sonatype.nexus.coreui.BlobStoreXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'create'/*(org.sonatype.nexus.coreui.BlobStoreXO) => org.sonatype.nexus.coreui.BlobStoreXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readTypes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'remove'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Browse: [
      {
        name: 'read'/*(org.sonatype.nexus.coreui.TreeStoreLoadParameters) => java.util.List */,
        len: 1,
        formHandler: false
      }
    ],
    migration_Assistant: [
      {
        name: 'cancel'/*() => void */,
        len: 0,
        formHandler: false
      },
      {
        name: 'prepare'/*() => void */,
        len: 0,
        formHandler: false
      },
      {
        name: 'abort'/*() => void */,
        len: 0,
        formHandler: false
      },
      {
        name: 'finish'/*() => void */,
        len: 0,
        formHandler: false
      },
      {
        name: 'configure'/*(com.sonatype.nexus.migration.ui.AssistantComponent$ConfigurationXO) => com.sonatype.nexus.migration.ui.AssistantComponent$PreviewXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'done'/*() => void */,
        len: 0,
        formHandler: false
      },
      {
        name: 'sync'/*() => void */,
        len: 0,
        formHandler: false
      },
      {
        name: 'stopWaiting'/*() => boolean */,
        len: 0,
        formHandler: false
      },
      {
        name: 'syncStatus'/*() => com.sonatype.nexus.migration.ui.AssistantComponent$SyncStatusXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'connect'/*(String, String, int, Boolean) => void */,
        len: 4,
        formHandler: false
      },
      {
        name: 'status'/*() => com.sonatype.nexus.migration.ui.AssistantComponent$StatusXO */,
        len: 0,
        formHandler: false
      }
    ],
    coreui_Vulnerability: [
      {
        name: 'read'/*(java.util.List) => java.util.Map */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Component: [
      {
        name: 'canDeleteAsset'/*(String, String) => boolean */,
        len: 2,
        formHandler: false
      },
      {
        name: 'readAsset'/*(String, String) => org.sonatype.nexus.coreui.AssetXO */,
        len: 2,
        formHandler: false
      },
      {
        name: 'deleteFolder'/*(String, String) => void */,
        len: 2,
        formHandler: false
      },
      {
        name: 'canDeleteComponent'/*(String) => boolean */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readComponentAssets'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => java.util.List */,
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteComponent'/*(String) => java.util.Set */,
        len: 1,
        formHandler: false
      },
      {
        name: 'canDeleteFolder'/*(String, String) => boolean */,
        len: 2,
        formHandler: false
      },
      {
        name: 'previewAssets'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => org.sonatype.nexus.extdirect.model.PagedResponse */,
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteAsset'/*(String, String) => java.util.Set */,
        len: 2,
        formHandler: false
      },
      {
        name: 'readComponent'/*(String, String) => org.sonatype.nexus.coreui.ComponentXO */,
        len: 2,
        formHandler: false
      }
    ],
    coreui_Task: [
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'stop'/*(String) => void */,
        len: 1,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.TaskXO) => org.sonatype.nexus.coreui.TaskXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'create'/*(org.sonatype.nexus.coreui.TaskXO) => org.sonatype.nexus.coreui.TaskXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readTypes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'run'/*(String) => void */,
        len: 1,
        formHandler: false
      },
      {
        name: 'remove'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    outreach_Outreach: [
      {
        name: 'readStatus'/*() => String */,
        len: 0,
        formHandler: false
      }
    ],
    s3_S3: [
      {
        name: 'signertypes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'regions'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'encryptionTypes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      }
    ],
    healthcheck_Info: [
      {
        name: 'read'/*(java.util.List) => java.util.List */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Upload: [
      {
        name: 'getUploadDefinitions'/*() => java.util.Collection */,
        len: 0,
        formHandler: false
      }
    ],
    coreui_ProprietaryRepositories: [
      {
        name: 'read'/*() => org.sonatype.nexus.coreui.ProprietaryRepositoriesXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readPossibleRepos'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.ProprietaryRepositoriesXO) => org.sonatype.nexus.coreui.ProprietaryRepositoriesXO */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Selector: [
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readReferences'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.SelectorXO) => org.sonatype.nexus.coreui.SelectorXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'create'/*(org.sonatype.nexus.coreui.SelectorXO) => org.sonatype.nexus.coreui.SelectorXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'remove'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_User: [
      {
        name: 'read'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => java.util.List */,
        len: 1,
        formHandler: false
      },
      {
        name: 'get'/*(String, String) => org.sonatype.nexus.coreui.UserXO */,
        len: 2,
        formHandler: false
      },
      {
        name: 'readSources'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.UserXO) => org.sonatype.nexus.coreui.UserXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'create'/*(org.sonatype.nexus.coreui.UserXO) => org.sonatype.nexus.coreui.UserXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'updateRoleMappings'/*(org.sonatype.nexus.coreui.UserRoleMappingsXO) => org.sonatype.nexus.coreui.UserXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'remove'/*(String, String) => void */,
        len: 2,
        formHandler: false
      },
      {
        name: 'changePassword'/*(String, String, String) => void */,
        len: 3,
        formHandler: false
      }
    ],
    coreui_HttpSettings: [
      {
        name: 'read'/*() => org.sonatype.nexus.coreui.HttpSettingsXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.HttpSettingsXO) => org.sonatype.nexus.coreui.HttpSettingsXO */,
        len: 1,
        formHandler: false
      }
    ],
    rapture_LogEvent: [
      {
        name: 'recordEvent'/*(org.sonatype.nexus.rapture.internal.logging.LogEventXO) => void */,
        len: 1,
        formHandler: false
      }
    ],
    rapture_Security: [
      {
        name: 'authenticate'/*(String, String) => org.sonatype.nexus.rapture.internal.security.UserXO */,
        len: 2,
        formHandler: false
      },
      {
        name: 'getUser'/*() => org.sonatype.nexus.rapture.internal.security.UserXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'getPermissions'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'authenticationToken'/*(String, String) => String */,
        len: 2,
        formHandler: false
      }
    ],
    licensing_Licensing: [
      {
        name: 'read'/*() => com.sonatype.nexus.licensing.internal.rest.ApiLicenseDetailsXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'uninstall'/*(String) => void */,
        len: 1,
        formHandler: false
      },
      {
        name: 'install'/*() => void -- FORM HANDLER */,
        len: 1,
        formHandler: true
      }
    ],
    migration_Repository: [
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'defaults'/*() => com.sonatype.nexus.migration.ui.RepositoryComponent$DefaultsXO */,
        len: 0,
        formHandler: false
      }
    ],
    migration_Progress: [
      {
        name: 'read'/*(String) => com.sonatype.nexus.migration.ui.ProgressComponent$ProgressXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'detail'/*(String) => com.sonatype.nexus.migration.ui.ProgressComponent$StepDetailXO */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Search: [
      {
        name: 'read'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => org.sonatype.nexus.extdirect.model.LimitedPagedResponse */,
        len: 1,
        formHandler: false
      }
    ],
    healthcheck_Status: [
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'enableAll'/*(boolean) => void */,
        len: 1,
        formHandler: false
      },
      {
        name: 'update'/*(boolean, String, boolean) => com.sonatype.nexus.plugins.healthcheck.ui.HealthCheckRepositoryStatusXO */,
        len: 3,
        formHandler: false
      },
      {
        name: 'readForRepository'/*(String) => com.sonatype.nexus.plugins.healthcheck.ui.HealthCheckRepositoryStatusXO */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_AnonymousSettings: [
      {
        name: 'read'/*() => org.sonatype.nexus.coreui.AnonymousSettingsXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.AnonymousSettingsXO) => org.sonatype.nexus.coreui.AnonymousSettingsXO */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Privilege: [
      {
        name: 'read'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => org.sonatype.nexus.extdirect.model.PagedResponse */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readReferences'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.PrivilegeXO) => org.sonatype.nexus.coreui.PrivilegeXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'create'/*(org.sonatype.nexus.coreui.PrivilegeXO) => org.sonatype.nexus.coreui.PrivilegeXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readTypes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'remove'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Datastore: [
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readH2'/*() => java.util.List */,
        len: 0,
        formHandler: false
      }
    ],
    clm_CLM: [
      {
        name: 'verifyConnection'/*(com.sonatype.nexus.clm.api.IqConnectionXo) => java.util.List */,
        len: 1,
        formHandler: false
      },
      {
        name: 'read'/*() => com.sonatype.nexus.clm.api.IqConnectionXo */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(com.sonatype.nexus.clm.api.IqConnectionXo) => com.sonatype.nexus.clm.api.IqConnectionXo */,
        len: 1,
        formHandler: false
      },
      {
        name: 'authTypes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readApplications'/*() => java.util.List */,
        len: 0,
        formHandler: false
      }
    ],
    ldap_LdapServer: [
      {
        name: 'verifyLogin'/*(org.sonatype.nexus.ldap.internal.ui.LdapServerXO, String, String) => void */,
        len: 3,
        formHandler: false
      },
      {
        name: 'verifyConnection'/*(org.sonatype.nexus.ldap.internal.ui.LdapServerConnectionXO) => void */,
        len: 1,
        formHandler: false
      },
      {
        name: 'verifyUserMapping'/*(org.sonatype.nexus.ldap.internal.ui.LdapServerXO) => java.util.Collection */,
        len: 1,
        formHandler: false
      },
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readTemplates'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readReferences'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.ldap.internal.ui.LdapServerXO) => org.sonatype.nexus.ldap.internal.ui.LdapServerXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'create'/*(org.sonatype.nexus.ldap.internal.ui.LdapServerXO) => org.sonatype.nexus.ldap.internal.ui.LdapServerXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'clearCache'/*() => void */,
        len: 0,
        formHandler: false
      },
      {
        name: 'changeOrder'/*(java.util.List) => void */,
        len: 1,
        formHandler: false
      },
      {
        name: 'remove'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    ssl_Certificate: [
      {
        name: 'details'/*(String) => com.sonatype.nexus.ssl.plugin.internal.ui.CertificateXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'retrieveFromHost'/*(String, Integer, String) => com.sonatype.nexus.ssl.plugin.internal.ui.CertificateXO */,
        len: 3,
        formHandler: false
      }
    ],
    proui_Database: [
      {
        name: 'resetQuorum'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    ssl_TrustStore: [
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'create'/*(String) => com.sonatype.nexus.ssl.plugin.internal.ui.CertificateXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'remove'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Repository: [
      {
        name: 'getBrowseableFormats'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readReferencesAddingEntriesForAllFormats'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => java.util.List */,
        len: 1,
        formHandler: false
      },
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'rebuildIndex'/*(String) => String */,
        len: 1,
        formHandler: false
      },
      {
        name: 'invalidateCache'/*(String) => void */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readReferences'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => java.util.List */,
        len: 1,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.RepositoryXO) => org.sonatype.nexus.coreui.RepositoryXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'create'/*(org.sonatype.nexus.coreui.RepositoryXO) => org.sonatype.nexus.coreui.RepositoryXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readFormats'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'readReferencesAddingEntryForAll'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => java.util.List */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readRecipes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      },
      {
        name: 'remove'/*(String) => void */,
        len: 1,
        formHandler: false
      }
    ],
    ClmStateContributor: [
    ],
    cleanup_CleanupPolicy: [
      {
        name: 'readByFormat'/*(org.sonatype.nexus.extdirect.model.StoreLoadParameters) => java.util.List */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Email: [
      {
        name: 'sendVerification'/*(org.sonatype.nexus.coreui.EmailConfigurationXO, String) => void */,
        len: 2,
        formHandler: false
      },
      {
        name: 'read'/*() => org.sonatype.nexus.coreui.EmailConfigurationXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.EmailConfigurationXO) => org.sonatype.nexus.coreui.EmailConfigurationXO */,
        len: 1,
        formHandler: false
      }
    ],
    coreui_Bundle: [
      {
        name: 'read'/*() => java.util.List */,
        len: 0,
        formHandler: false
      }
    ],
    ahc_Component: [
      {
        name: 'containsApplication'/*(String) => boolean */,
        len: 1,
        formHandler: false
      }
    ],
    node_NodeAccess: [
      {
        name: 'nodes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      }
    ],
    coreui_RealmSettings: [
      {
        name: 'read'/*() => org.sonatype.nexus.coreui.RealmSettingsXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.RealmSettingsXO) => org.sonatype.nexus.coreui.RealmSettingsXO */,
        len: 1,
        formHandler: false
      },
      {
        name: 'readRealmTypes'/*() => java.util.List */,
        len: 0,
        formHandler: false
      }
    ],
    rut_Auth: [
      {
        name: 'authenticate'/*() => boolean */,
        len: 0,
        formHandler: false
      },
      {
        name: 'authToken'/*() => String */,
        len: 0,
        formHandler: false
      }
    ],
    coreui_Freeze: [
      {
        name: 'forceRelease'/*() => org.sonatype.nexus.coreui.FreezeStatusXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'read'/*() => org.sonatype.nexus.coreui.FreezeStatusXO */,
        len: 0,
        formHandler: false
      },
      {
        name: 'update'/*(org.sonatype.nexus.coreui.FreezeStatusXO) => org.sonatype.nexus.coreui.FreezeStatusXO */,
        len: 1,
        formHandler: false
      }
    ],
    atlas_SystemInformation: [
      {
        name: 'read'/*() => java.util.Map */,
        len: 0,
        formHandler: false
      }
    ]
  }
}

