import Search from './models/Search'
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base'
import Recipe from './models/Recipe'
/**Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Like recipes
 */

const state = {

}


// SEARCH CONTROLLER

const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput()

    if (query) {
        // 2. New search object and add it to state
        state.search = new Search(query)

        // 3. Prepare UI for results
        searchView.clearInput()
        searchView.clearResults()
        renderLoader(elements.searchRes)
        // 4. Search for recipies
        await state.search.getResults()

        // 5. Render results on UI
        clearLoader()
        searchView.renderResults(state.search.results)
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault()
    controlSearch()
})

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline')
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10)
        searchView.clearResults()
        searchView.renderResults(state.search.results, goToPage)
    }
    console.log(btn)
})

// RECIPE CONTROLLER

const r = new Recipe(47746)
r.getRecipe()

//just testing commit lolz