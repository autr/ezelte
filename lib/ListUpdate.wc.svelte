<svelte:options tag="list-update" />

<script>

    import ListForm from './ListForm.svelte'

    export let interests = []
    export let root = null
    export let user = null
    export let css = ''
    export let message = 'Mailing list settings updated:'
    export let link = '/'
    export let button = 'return'

</script>
<ListForm {interests} {root} {user} {css} {message} {link} {button} editor={true} />