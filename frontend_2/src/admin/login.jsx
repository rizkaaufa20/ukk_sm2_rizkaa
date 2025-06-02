import React from 'react';

const Login = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const fData = {};
        for (let elm of event.target.elements) {
            if (elm.type === 'email' || elm.type === 'password') {
                fData[elm.name] = elm.value;
            }
        }

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(fData),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                event.target.reset();
                window.location.href = '/admin';
            } else if (response.status === 401) {
                alert("Password salah");
            } else if (response.status === 404) {
                alert("Username tidak ditemukan");
            }
        } catch (error) {
            console.error('Error : ', error);
        }
    };

    return (
        <div
            style={{
                backgroundImage: 'url("/public/background.jpg")', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                overflow: 'hidden',
            }}
        >
            <main style={{ maxWidth: 500, width: '100%' }}>
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        padding: '2rem',
                        color: '#fff',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color:'#000' }}>Login</h2>

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem', color:'#000'}}>Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.3)',
                                    color: '#fffx',
                                    border: 'none',
                                    padding: '0.75rem',
                                    borderRadius: '6px',
                                    width: '100%',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem',color:'#000' }}>Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.3)',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '0.75rem',
                                    borderRadius: '6px',
                                    width: '100%',
                                }}
                            />
                        </div>
                        <div style={{ textAlign: 'end' }}>
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    padding: '0.5rem 1.25rem',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s',
                                }}
                                onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
                                onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;
