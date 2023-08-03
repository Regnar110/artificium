export const userAccessRequest = async <ReturnType, BodyType>(endpoint:string, requestBody?:BodyType):Promise<ReturnType> => {
    const response = await fetch(`http://localhost:3001/${endpoint}`,
        {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(requestBody), // body data type must match "Content-Type" header
        }
    )
    const parsedResponse:ReturnType = await response.json()
    console.log(response)
    console.log(parsedResponse)
    return parsedResponse
}