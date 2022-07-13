export default function Pagination({ postperpage, totalPost, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postperpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
