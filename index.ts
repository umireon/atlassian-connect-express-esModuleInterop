import express from 'express'
import ace, { HostClient, ClientInfo, AddOn, AddOnFactory} from 'atlassian-connect-express'

const app = express()
const addon = ace(app)