import { IoPerson, IoCallSharp } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.cont}>
      <div>
        <p className={css.text}>
          <IoPerson /> {contact.name}
        </p>
        <p className={css.text}>
          
          {contact.number}
        </p>
      </div>

      <button onClick={() => onDelete(contact.id)} className={css.btn}>
        Delete
      </button>
    </div>
  );
}