import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from "react-transition-group"; 
import { connect } from 'react-redux';

import { List } from './ContactsList.css';

import ContactItem from '../ContactItem';

const ContactsList = ({ filteredContacts }) => {

	const listItems = filteredContacts.map(({ name, number, id }) => {
		return (
			<CSSTransition
				key={id}
				timeout={250}
				classNames="fade"
				unmountOnExit
			>
				<ContactItem
					id={id}
					name={name}
					number={number}					
					// onDeleteContact={onDeleteContact}
				/>
			</CSSTransition>
		)
	})

	return (
		
		<List>
			<TransitionGroup>
				{listItems}
			</TransitionGroup>
		</List>
	)
}

ContactsList.propTypes = {
	filteredContacts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired
	}))
}

const mapStateToProps = ({ contacts: { items, filter } }) => {
	const filteredContacts = items.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase()));
	return {
		filteredContacts
	};
};

export default connect(mapStateToProps)(ContactsList);