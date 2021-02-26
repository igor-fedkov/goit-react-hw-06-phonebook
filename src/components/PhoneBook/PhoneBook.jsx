import { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import * as actions from '../../redux/phoneBook/phoneBook-actions';

import { PhoneBookEl, Title } from './PhoneBook.css';

import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import Notification from '../Notification';


class PhoneBook extends Component {
	
	static propTypes = {
		name: PropTypes.string,
		number: PropTypes.string,
		showNotification: PropTypes.bool
	}

	state = {
		name: '',
		number: '',
		showNotification: false
	}

	onInputChange = (event) => {
    const { name, value } = event.target;
		this.setState(
      { [name]: value }
    )
	}

	onSubmit = (event) => {
		event.preventDefault();

		const { name, number } = this.state;
		const { contacts, addContact } = this.props;

		const isNameAlreadyExists = contacts.find(contact => contact.name === name);
		if (isNameAlreadyExists !== undefined) {
			this.setState({ showNotification: true });
      setTimeout(() => this.setState({ showNotification: false }), 3000);
      return;
		}

		addContact({
			id: uuidv4(),
			name,
			number
		});	

    this.setState({ name: '', number: '' });
	}

	render() {
		const { contacts } = this.props;
		const { name, number, showNotification } = this.state;
		const timeout = 250;

		return (
			<PhoneBookEl>
				
				<CSSTransition
					in={true}
					appear={true}
					classNames="fade"
					timeout={timeout}>
					
						<Title>PhoneBook</Title>
				</CSSTransition>

				<CSSTransition
					in={showNotification}
					appear={true}
					classNames="fade"
					timeout={timeout}
					unmountOnExit
				>					
					<Notification text="Contact already exists!"/>
				</CSSTransition>

				<ContactForm
					name={name}
					number={number}
					onSubmit={this.onSubmit}
					onInputChange={this.onInputChange}
				/>

				<CSSTransition
					in={contacts.length > 1}
					appear={true}
					classNames="fade"
					timeout={timeout}
					unmountOnExit>
					
					<Filter />
				</CSSTransition>
				
				<ContactsList />
				
				
			</PhoneBookEl>
		);
	}
}

const mapStateToProps = ({contacts: { items }}) => {
	return {
		contacts: items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addContact: ({ id, name, number }) => dispatch(actions.addContact({ id, name, number })),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);