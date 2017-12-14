export default function ( str ) {
  return decodeURIComponent(
    atob(
      atob(
        window.decodeURIComponent( str )
      )
    )
  )
}