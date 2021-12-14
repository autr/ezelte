<script>
    import { onMount } from 'svelte'
    import fetcher from './fetcheriser.js'
    import common from './common.js'

    const browser = typeof window !== 'undefined' && typeof window.document !== 'undefined'

    function getUrlParams(search) {
        console.log('URL PARAMS', search)
        let hashes = search.slice(search.indexOf('?') + 1).split('&')
        return hashes.reduce((params, hash) => {
            let [key, val] = hash.split('=')
            let value = val ? decodeURIComponent(val) : false
            return Object.assign(params, {[key]: value })
        }, {})
    } 


    export let interests = []
    export let name = ''
    export let address = ''
    export let root = null
    export let user = null
    export let css = ''
    export let message = 'Success'
    export let link = '/'
    export let button = 'return'

    export let class_ = ''
    export let style_ = ''

    export let init = ''
    let vars = {}
    export let editor = false

    let error, disabled, done, invalid

    function setAddress( editor_, interests_ ) {
        let search = browser ? window.location.search || '' : ''
        search = search == '' || !browser ? init : getUrlParams( search )
        address = search.address
        if (address == '') address = null
        const ints = parse(interests_ || '')
        const arr = (search.vars || '').split(',')
        arr.forEach( key => {
            if ( ints.find( int => int.key == key) ) vars[key] = true
        })
        if (!editor) return
        if (!address || Object.keys(vars).length == 0) {
            invalid = `
                <div class="ezipe-success ezipe-message">Address and vars must be set in URL search params, ie:</div>
                <div class="ezipe-success ezipe-details monospace mt2">?address=${address || 'foo@bar.com'}&news=annoucements&code=opensource</div>
            `
        }
    }

    $: setAddress( editor, interests )

    $: success = `
        <div>${message}</div>
        <div class="monospace mb2">${name} &lt;${address}&gt;</div>
        <a class="filled button text-center" href="${link}">${button}</a>
    `

    $: action = common.url(root, user, 'signup_mailing_list')

    async function submit(e) {
        console.log('[list-signup] 🌐  submitting', {name, address, vars})
        error = null
        disabled = true
        e.preventDefault()
        e.stopPropagation()
        const res = await fetcher.post( e.target.action, { name, address, vars } )
        console.log(res)
        if (res.ok) done = success
        if (!res.ok) error = res.message
        disabled = false
    }

    onMount(async e => {
        console.log(`[list-signup] ✨  mounted with ${root} ${user} ${JSON.stringify(vars)}`)
    })

    $: style = `
        <style>
            @import "${css}";
        </style>
    `

    function parse( long ) {
        if (typeof(long) != 'string') return long
        return long.split(',').filter( str => str != '').map( pair => {
            return { 
                key: pair.split(':')[0],
                text: pair.split(':')[1]
            }
        })
    }


    $: parsed =  typeof(interests) == 'string' ? parse( interests ) : interests

    async function unsubscribe(e) {

        error = null
        disabled = true
        e.preventDefault()
        e.stopPropagation()

        const res = await fetcher.post( common.url(root, user, 'unsubscribe_mailing_list'), { name, address, vars } )
        if (res.ok) done = success
        if (!res.ok) error = res.message


        disabled = false
    }

</script>
{#if invalid}
    <div class="ezipe-error ezipe-invalid">{@html invalid}</div>
{:else}
    <form {action} on:submit={ submit } class="ezipe-mailing-list {class_}" style={style_}>

        {@html style}
        <!-- <label for="name">name</label> -->
        <input 
            class:none={done || editor} 
            {disabled} 
            id="name" 
            placeholder="name" 
            name="name" 
            type="text" 
            class="ezipe-field-name"
            bind:value={name} />
        <!-- <label for="name">address</label> -->
        <input 
            class:none={done} 
            disabled={disabled || editor}
            id="address" 
            placeholder="email" 
            name="address" 
            type="text" 
            class="ezipe-field-address"
            bind:value={address} />

        {#each parsed as int, i }
            <label 
                class:none={done} 
                style="user-select:none"
                class="ezipe-field-label ezipe-field-{int.key} checkbox pointer user-select-none" 
                class:disabled={disabled}>
                <input 
                    {disabled} 
                    type="checkbox" 
                    bind:checked={vars[int.key]} />
                <span />
                {@html int.key}
                <em class="fade ml0-6">{@html int.text}</em>
            </label>
        {/each}

        <button 
            class:none={done} 
            class="ezipe-button ezipe-button-submit filled" 
            {disabled} >
            { editor ? 'update' : 'subscribe' }
        </button>
        {#if editor}
            <button
                class="ezipe-button ezipe-button-unsubscribe"
                on:click={unsubscribe}>
                unsubscribe
            </button>
        {/if}

        <div 
            style="margin-bottom:0!important"
            class="ezipe-error error"
            class:hidden={!error} 
            class:none={done}>
            {error || ''}
        </div>

        {@html done || ''}
    </form>
{/if}