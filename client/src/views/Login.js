import React, { Component } from 'react';

class Login extends Component {
    state = {
        post: '',
        responseToPost: '',
    };

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: 'Juan' }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
    };

    render() {
        return (
            <>
                <main>
                    <section className="absolute w-full h-full">
                        <div
                            className="absolute top-0 w-full h-full bg-gray-900"
                        ></div>
                        <div className="container mx-auto px-4 h-full">
                            <div className="flex content-center items-center justify-center h-full">
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                        <div className="rounded-t mb-0 px-6 py-6">
                                            <div className="text-center mb-3">
                                                <h6 className="text-gray-600 text-sm font-bold">
                                                    Sign in with
                                                </h6>
                                            </div>
                                            <div className="btn-wrapper text-center">
                                                <form action="https://github.com/login/oauth/authorize" method="GET">
                                                    <input type="hidden" name="client_id" value="c0f8dfe262994231df7d" />
                                                    <button
                                                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                                        type="submit"
                                                        style={{ transition: "all .15s ease" }}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="w-5 mr-1"
                                                            src={require("assets/img/github.svg")}
                                                        />
                                                    Github
                                                </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default Login;