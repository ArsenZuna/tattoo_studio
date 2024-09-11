import React from 'react';
//import nav data
import {navData} from "../data";
//import components
import Socials from "./Socials";

const NavMobile = () => {
	//destructure data
	const {items} = navData;
	return (
		<nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
			<ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
				{items.map((item, index) => {
					return (
						<li key={index}>
							<a className='text-2xl font-primary link hover:border-b-2 hover:border-dark transition duration-400' href={item.href}>{item.name}</a>
						</li>
					)
				})}
			</ul>
			<div className='text-2xl'>
				<Socials/>
			</div>
		</nav>
	)
};

export default NavMobile;
