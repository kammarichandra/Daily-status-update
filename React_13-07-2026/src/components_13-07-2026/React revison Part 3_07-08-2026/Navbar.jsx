import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <Link to="/">Home</Link> |

            <Link to="/about">About</Link> |

            <Link to="/contact">Contact</Link> |

            <Link to="/dashboard">Dashboard</Link> |

            <Link to="/student/101">Student</Link> |

            <Link to="/login">Login</Link>

            <hr />
        </>
    );
}