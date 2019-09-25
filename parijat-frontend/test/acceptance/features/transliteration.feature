Feature: transliteration
  As a user
  I want to be able to transliterate latin characters into nepali characters
  So, I would be able to search using latin characters

  Background:
    Given the user has browsed to the homepage

  Scenario: nepali string transliteration for the entered english character term should be displayed
    When the user enters the english characters "munaa madan"
    Then the transliteration should be "मुना मदन्"


  Scenario: nepali string transliteration for the entered nepali character term should not be displayed
    When the user enters the nepali characters "मुना मदन्"
    Then the transliteration should not be displayed