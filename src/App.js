import 'animate.css';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './components/About';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Process from './components/Process';
import React from 'react';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
	return (
		<Router>
			<div className='App'>
				<HeroSection />
				<About />
				<Services />
				<Benefits />
				<Process />
				<ContactForm />
				<WhatsAppButton />
				<Footer />
			</div>
		</Router>
	);
}

export default App;

