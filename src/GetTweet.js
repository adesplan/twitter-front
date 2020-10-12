import React, { useState, useEffect } from "react";

const Tweets = () => {
    const [hasError, setErrors] = useState(false);
    const [tweets, setTweets] = useState({});

    useEffect(() =>
        fetch(`http://localhost:5000/api/v1/tweets/`, {
            method: "GET",
            mode: "cors",
            credentials: "omit",
            cache: "no-cache",
            headers: new Headers({
                "content-type": "application/json",
                'Access-Control-Allow-Origin': 'true'
            })
        })
            .then(response => response.json())
            .then(res => this.setState({tweets: []}))
            .catch(() => this.setState({hasErrors: true}))
    );
}

export default Tweets;
