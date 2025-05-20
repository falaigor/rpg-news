import retry from "async-retry"

const MAX_TIMEOUT_IN_MILLISECONDS = 1_000
const RETRIES = 100
const HTTP_STATUS_OK = 200

async function waitForAllServices() {
  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: RETRIES,
      maxTimeout: MAX_TIMEOUT_IN_MILLISECONDS,
    }) 

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status")

      if (response.status !== HTTP_STATUS_OK) {
        throw Error();
      }
    }
  }

  await waitForWebServer()
}

export default { waitForAllServices }