interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null

  return (
    <nav
      className="d-flex flex-wrap justify-content-center align-items-center gap-3 mt-4"
      aria-label="Paginación"
    >
      <button
        type="button"
        className="btn btn-primary"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Anterior
      </button>

      <span aria-live="polite">
        Página {page} de {totalPages}
      </span>

      <button
        type="button"
        className="btn btn-primary"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Siguiente
      </button>
    </nav>
  )
}