import React from 'react'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODMxZDFhMjZlYTIwNDYxMzRjYWUxZmEyMWQwNTlhYyIsIm5iZiI6MTc1MTE5NDkyOC40NzYsInN1YiI6IjY4NjExZDMwY2Q1OGNhMTlmNDIyOTZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p7PL-Jmcdpiijq1jHgsfWHBLOFZmMopPeC1fIRLGL88'
  }
 })


export default instance