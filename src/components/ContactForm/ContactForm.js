import React, { Component } from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import Notification from '../Notification/Notification';

import styles from './ContactForm.module.css';

const initialState = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const contacts = this.props.contacts;

    for (const contact of contacts) {
      const hideNotification = () => {
        this.setState({ showNotification: false });
      };

      const notificationTimer = () => {
        setTimeout(hideNotification, 3000);
      };

      if (name === contact.name) {
        this.setState({ showNotification: true });
        notificationTimer();
        clearTimeout(notificationTimer);
        return;
      }
    }

    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    const { name, number, showNotification } = this.state;

    return (
      <form onSubmit={this.hendleSubmit} className={styles.contact_form}>
        <Notification showNotification={showNotification} />

        <label className={styles.lable}>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
            className={styles.input}
          />
        </label>
        <label className={styles.lable}>
          Number
          <input
            type="phone"
            value={number}
            onChange={this.handleChange}
            name="number"
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: contact => dispatch(phonebookActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
