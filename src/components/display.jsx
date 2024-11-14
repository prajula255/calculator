export default function Display({ calculation, result }) {
    return (
        <div className="d-flex flex-column text-end">
            <p>
                {
                    calculation ? (
                        <span className="text-secondary fs-5">
                            {calculation}
                        </span>
                    ) : (
                        <span className="text-secondary fs-5">
                            0
                        </span>
                    )
                }
            </p>
            <p className="fs-2">{result}</p>
        </div>
    )
}