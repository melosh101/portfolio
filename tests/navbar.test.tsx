import {http, HttpResponse} from 'msw'
import {setupServer} from 'msw/node'
import {render, screen} from '@testing-library/react'
import {beforeAll, afterEach, afterAll, test, expect} from "bun:test"
import Navbar from '../src/components/Navbar'

const server = setupServer(
  http.get('/greeting', () => {
    return HttpResponse.json({greeting: 'hello there'})
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('check if navbar will render', async () => {
  render(<Navbar/>)

  await screen.findByRole("navigation")
  expect(screen.getByRole("navigation"))
})