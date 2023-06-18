import React, {useState} from "react";
import { toast } from 'react-toastify';
import { BiSearchAlt } from 'react-icons/bi';
import { Form, Button, BtnLabel, Input } from './SearchBar.styled';
import PropTypes from "prop-types";

export default function SearchBar({ onSubmit, input }) {
  const [query, setQuery] = useState(input);

  const handleSubmit = e => {
    e.preventDefault();
    const handleQuery = query.trim();

    if (!handleQuery) {
      toast.error('please enter a request',{theme: "colored"});
      return
    }
    onSubmit(handleQuery);
  }

  const handleChange = e => setQuery(e.target.value);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search video"
        value = {query}
        onChange={handleChange}
      />

      <Button type="submit">
        <BtnLabel>Search</BtnLabel>
        <BiSearchAlt/>
      </Button>
    </Form>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  input:PropTypes.string.isRequired,
}
