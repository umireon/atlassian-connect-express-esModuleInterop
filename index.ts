import express from 'express'
import ace from 'atlassian-connect-express'
import { HostClient, ClientInfo, AddOn, AddOnFactory } from 'atlassian-connect-express'

const app = express()
const addon: AddOn = ace(app)
const a: AddOnFactory = (a) => ({} as AddOn)