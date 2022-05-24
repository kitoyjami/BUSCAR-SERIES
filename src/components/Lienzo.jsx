
export const LienzoPrincipal = ({ Recibirdata }) => {
  return (
    <>
      <ul style={{ paddingInlineStart: '0' }} className='row gy-4'>
        {
                     Recibirdata.map(movie => (

                       <li style={{ listStyle: 'none' }} key='' className='col-3'>
                         <article className='card text-dark'>s
                           <figure>
                             <img className='img-fluid' src={movie.show.image.medium} alt={movie.show.name} />
                           </figure>
                           <h6>{movie.show.name}</h6>
                           <small>{movie.show.ended}</small>
                         </article>

                       </li>
                     ))

                     }
      </ul>
    </>
  )
}
