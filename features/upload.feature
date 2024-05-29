Feature: Upload file functionality

  Scenario: User Upload file to GURUDEMO Website
    When a user clicks on selenium link
    And scroll down and clicks on File Upload link 
    And clicks on choose file
    #  And select file from local machine 
    And the user clicks on checkbox for I accept terms of service
    And clicks on submit button file
    Then the user should receive  "has been successfully uploaded" message