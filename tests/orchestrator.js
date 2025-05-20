import retry from "async-retry"

const MAX_TIMEOUT_IN_MILLISECONDS = 1_000
const RETRIES = 100

async function waitForAllServices() {
  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: RETRIES,
      maxTimeout: MAX_TIMEOUT_IN_MILLISECONDS,
    }) 

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status")
      await response.json();
    }
  }

  await waitForWebServer()
}

export default { waitForAllServices }