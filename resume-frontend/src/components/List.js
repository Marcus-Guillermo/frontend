import React, { useState, useEffect } from 'react';

const List = () => {
  const [listItems, setListItems] = useState(Array.from(Array(50).keys(), n => n + 1));
  const [isFetching, setIsFetching] = useState(false);
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }
    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    function fetchMoreListItems() { 
        setTimeout(() => {
            setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]))
        })
    }
  return (
    <>
      <ul className="list-group mb-2">
        {listItems.map(listItem => <li className="list-group-item">List Item {listItem}</li>)}
      </ul>
      {isFetching && 'Getching more list items...'}
    </>
  );
};

export default List;