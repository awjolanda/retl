const ReviewURL = 'http://localhost:8000/api/v1/reviews/'
const EmperorsURL = 'http://localhost:8000/api/v1/emperors/'


export async function getAllEmperors() {
    const response = await fetch(EmperorsURL);

    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return await response.json()
}

export async function getEmperorById(id) {
    const response = await fetch(`${EmperorsURL}${id}`)

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    return await response.json()
}

//Review API
export async function getReviews(id) {
    const response = await fetch(`${ReviewURL}emperors/${id}`)

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    return await response.json()
}

export async function getReviewById(id) {
    const response = await fetch(`${ReviewURL}${id}`)

    if (!response.ok){
        return Promise.reject(response.statusText)
    }

    return await response.json()
}

export async function createReview(post) {
    const response = await fetch(`${ReviewURL}new`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    return await response.json()
}

export async function updateReview(post){
    const response = await fetch(`${ReviewURL}${post._id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }
    return await response.json()
}

export async function deleteReview(post) {
    const response = await fetch(`${ReviewURL}${post._id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    return await response.json()
}