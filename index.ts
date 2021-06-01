import express from 'express'
import ace, { AddOn } from 'atlassian-connect-express'

const app = express()
const addon = ace(app)
