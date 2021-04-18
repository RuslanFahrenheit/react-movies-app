import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import { Heading } from '../heading';
import { Input } from '../input';
import { Button } from '../button';
import './search.scss';
import { fetchMovies } from '../../store/actions/movies';

const mapStateToProps = (state) => {
  const { movie, filter } = state;
  return { movie, filter };
};

const mapDispatchToProps = (dispatch) => ({
  searchDataMovies: (params, searchString) => dispatch(fetchMovies(params, searchString)),
});

const Search = ({
  placeholder,
  title,
  searchDataMovies,
}) => {
  const queryParamsFromStore = useSelector((state) => state.filter);

  const [searchString, setSearchString] = useState('');

  const onSearchChange = (e) => {
    setSearchString(e.target.value);
  };

  const history = useHistory();
  const location = useLocation();

  const handleSearch = () => {
    searchDataMovies(queryParamsFromStore, searchString);
    history.push(`?search=${searchString}`);
  };

  const searchParamsFromURL = qs.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    if (searchParamsFromURL.search) {
      setSearchString(searchParamsFromURL.search);
      searchDataMovies(queryParamsFromStore, searchParamsFromURL.search);
    }
  }, []);

  return (
    <div className="search-wr">
      <Heading level="h2" title={title} />
      <div className="search">
        <Input
          placeholder={placeholder}
          onChange={onSearchChange}
          value={searchParamsFromURL.search}
        />
        <Button
          variant="primary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

const {
  string,
  func,
} = PropTypes;

Search.propTypes = {
  placeholder: string,
  title: string,
  searchDataMovies: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
