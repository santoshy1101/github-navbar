import React, { useEffect, useState } from 'react';

const Data = () => {
  const [issues, setIssues] = useState([]);
  const [totalOpenIssues, setTotalOpenIssues] = useState(0);

  useEffect(() => {
    const fetchIssues = async () => {
      let allIssues = [];
      let page = 1;
      let response = null;

      do {
        response = await fetch(`https://api.github.com/repos/apple/cups/issues?state=open&page=${page}`);
        const issuesData = await response.json();
        allIssues = allIssues.concat(issuesData);
        page++;
      } while (response.headers.get('Link') && response.headers.get('Link').includes('rel="next"'))

      setIssues(allIssues);

      // Get total length of open issues from Link header
      const linkHeader = response.headers.get('Link');
      if (linkHeader) {
        const match = linkHeader.match(/.*page=\d+>; rel="last".*total=(\d+).*/);
        if (match) {
          const totalIssues = parseInt(match[1]);
          setTotalOpenIssues(totalIssues);
        }
      }
    };

    fetchIssues();
  }, []);

  return (
    <div>
      <h1>Open Issues for apple/cups</h1>
      <p>Total Issues: {totalOpenIssues}</p>
      {issues.map((issue) => (
        <div key={issue.id}>
          <p>Issue Title: {issue.title}</p>
          <p>Issue Number: {issue.number}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
