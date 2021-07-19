*** Settings ***
Documentation     Checks the version endpoint
Resource          resources.robot

*** Test Cases ***
Check Version
    Open Browser To Version Endpoint
    Page Should Contain      version
    [Teardown]    Close Browser