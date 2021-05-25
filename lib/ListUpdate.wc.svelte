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
    export let init = ''

    let class_ = ''
    export { class_ as class }
    let style_ = ''
    export { style_ as style }

</script>
<ListForm {interests} {root} {user} {css} {message} {link} {button} {style_} {class_} {init} editor={true} />