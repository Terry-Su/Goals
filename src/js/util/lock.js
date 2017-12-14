export default function ( str ) {
  return encodeURIComponent(
    btoa(
      btoa(
        window.encodeURIComponent( str )
      )
    )
  )
}