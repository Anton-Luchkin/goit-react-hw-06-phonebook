import React from 'react';
import Wrapper from './Wrapper/Wrapper';
import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import styles from './App.module.css';

export default function App() {
  return (
    <Wrapper>
      <div>
        <Title />
        <div className={styles.container}>
          <ContactForm />
          <div className={styles.contactsListContainer}>
            <Filter />
            <ContactList />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
