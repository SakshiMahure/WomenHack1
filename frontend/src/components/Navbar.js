import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
// import { useAuth0 } from "@auth0/auth0-react";

import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

import "./Navbar.css";

const Navbar = () => {
	// const { loginWithRedirect } = useAuth0();
	// const { logout } = useAuth0();
	// const { user, isAuthenticated, isLoading } = useAuth0();
	// if (isLoading) {
	// 	return <div>Loading ...</div>;
	// }
	const { logout } = useLogout();
	const { user } = useAuthContext();
	const handleClick = () => {
		logout();
	};

	return (
		<div>
			<nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
				<div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
					<div class="text-indigo-500 md:order-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
							/>
						</svg>
					</div>
					<div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
						<ul class="flex font-semibold justify-between">
							<li class="md:px-4 md:py-2 text-indigo-500">
								<Link to="/">Home</Link>
							</li>
							<li class="md:px-4 md:py-2 hover:text-indigo-400">
								<a href="#">Courses</a>
							</li>
							<li class="md:px-4 md:py-2 hover:text-indigo-400">
								<a href="#">Explore</a>
							</li>
							<li class="md:px-4 md:py-2 hover:text-indigo-400">
								<a href="#">About</a>
							</li>
							<li class="md:px-4 md:py-2 hover:text-indigo-400">
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
					<div class="order-2 md:order-3 flex space-x-4">
						{user && (
							<div>
								<Link to="/profile">
									<span>{user.email}</span>
								</Link>
								<button onClick={handleClick}>Log out</button>
							</div>
						)}
						{!user && (
							<div>
								<Link to="/login">
									<button className="btn-grad">Login</button>
								</Link>
								<Link to="/signup">
									<button class="btn-grad">Signup</button>
								</Link>
							</div>
						)}

						{/* {isAuthenticated ? (
							<button
								onClick={() =>
									logout({ logoutParams: { returnTo: window.location.origin } })
								}
							>
								Log Out
							</button>
						) : (
							<button onClick={() => loginWithRedirect()}>Log In</button>
						)}
						{isAuthenticated && (
							<div>
								<img src={user.picture} alt={user.name} />
								<h2>{user.name}</h2>
								<p>{user.email}</p>
							</div>
						)} */}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
