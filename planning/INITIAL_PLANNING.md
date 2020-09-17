# Project 4 - Project Idea and Initial Planning
# Summary:
* Refactor Project 1 Flash Cards https://github.com/dg02701/project1_game_Flash_Cards and improve same.
* Current Project 1 app is a front-end app only and has only a small, pre-loaded set of flask cards.
* Backend - Proposed Project 4 app will implement a Node/Express backend to:
    * Store multiple sets (‘decks’) of flashcards
    * Easily add more decks
    * Maintain and persist user statistics on decks played and progress
* Frontend - The current front-end will be refactored using React that will communicate with the backend app.
    * As before, UI design will be optimized to account for learning differences but will include some UI customization by end-users.

# Data Models:
* UserModel - (many-to-many with DeckModel)
    * ID
    * Name (first only or nick-name for user privacy)
    * Decks Played
        * ID
        * Cards correct first pass
        * Cards correct most recent
        * Times user has played deck
* DeckModel - (many-to-many with UserModel)
    * ID
    * Name
    * Type (set of: Preloaded, API random, Custom)
    * Category (freeform ex. “Math”, “Quotes”, etc.)
    * Cards (array of arrays)
        * ID
        * Prompt (on front) ex. “What is this number?”
        * Question (on front) ex. “4”
        * Answer (on back) ex. “Four”
        * Source (on back) ex. In this example, null

# User Stories: 
Note: User = Student k-4 playing app
MVP = User Stories 1 & 2
1. As a user, I want UI uncluttered and supportive of learning differences 
2. As a user, I want multiple, pre-loaded flash card decks so I can play right away
3. As a parent, I want to be able to load custom decks WITHOUT needing any IT background
4. As a parent, I want game to track my student’s progress
