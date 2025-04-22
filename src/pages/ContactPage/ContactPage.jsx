import { useDispatch, useSelector } from "react-redux";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import ContactList from "../../components/ContactList/ContactList";
import {
  selectContact,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selector";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>ContactPage</h1>
      <ContactEditor />
      {isLoading && <p>Loading...</p>}
      {isError && <h1>Not Found</h1>}
      {contacts.length > 0 ? <ContactList /> : <h1>No contacts</h1>}
    </>
  );
}