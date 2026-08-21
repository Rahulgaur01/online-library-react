import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialBooks = [
  {
    id: '1',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    category: 'Fiction',
    rating: 4.6,
    description: 'A psychological mystery about a famous painter who stops speaking after a shocking crime.'
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Non-Fiction',
    rating: 4.8,
    description: 'A practical guide to building good habits, breaking bad ones, and making small changes that compound.'
  },
  {
    id: '3',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    rating: 4.7,
    description: 'An epic science-fiction adventure set on the desert planet Arrakis, where power and survival collide.'
  },
  {
    id: '4',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fantasy',
    rating: 4.9,
    description: 'Bilbo Baggins leaves his comfortable home and joins an unforgettable quest with a group of dwarves.'
  },
  {
    id: '5',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'History',
    rating: 4.5,
    description: 'A broad exploration of human history, from early hunter-gatherers to modern societies.'
  },
  {
    id: '6',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Fiction',
    rating: 4.6,
    description: 'A young shepherd follows a dream and discovers lessons about purpose, courage, and destiny.'
  },
  {
    id: '7',
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Biography',
    rating: 4.7,
    description: 'A memoir about education, family, resilience, and the transformative power of learning.'
  },
  {
    id: '8',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    category: 'Sci-Fi',
    rating: 4.8,
    description: 'A lone astronaut wakes up with no memory and must solve an impossible scientific problem.'
  }
]

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.unshift({
        ...action.payload,
        id: crypto.randomUUID()
      })
    }
  }
})

export const { addBook } = booksSlice.actions

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  }
})