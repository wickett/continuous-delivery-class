*** Settings ***
Documentation     Generates a word cloud
Resource          resources.robot

*** Test Cases ***
Generate Word Cloud
    Open Browser To Home Page
    Input Word Cloud Text    What does the fox say? Ring a ding ding ding ding a ding a ding
    Submit Word Cloud Text
    Home Page Should Be Open
    Page Should Contain      ding
    [Teardown]    Close Browser