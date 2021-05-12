<svelte:options tag="list-signup" />

<script>

    import ListForm from './ListForm.svelte'

    export let interests = []
    export let root = null
    export let user = null
    export let css = ''
    export let message = 'Thank you, you have been subscribed as:'
    export let link = '/'
    export let button = 'return'

</script>
<ListForm {interests} {root} {user} {css} {message} {link} {button} editor={false} />