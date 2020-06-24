import React from 'react'
import {
  SearchBox,
  SearchkitProvider,
  SearchkitManager,
  Layout,
  LayoutBody,
  TopBar,
  SideBar,
  LayoutResults,
  ActionBar,
  ActionBarRow,
  RefinementListFilter,
  Hits,
  NoHits,
  HitsStats,
  SearchkitComponent,
  //MovieHitsGridItem,
  SelectedFilters,
  MenuFilter,
  HierarchicalMenuFilter,
  Pagination,
  ResetFilters
} from "searchkit";

import './App.css';
import FlightHit from './components/FlightHit.js';

const searchkit = new SearchkitManager("http://localhost:8080/flight-search")

function App() {
  return (
    <SearchkitProvider searchkit={searchkit}>
      <Layout>
        <TopBar>
          <SearchBox
            autofocus={true}
            searchOnChange={true}
            prefixQueryFields={["Carrier^3", "Dest^3", "DestCityName^3", "DestCountry^2", "DestRegion^2", "DestAirportID^5", "DestWeather", "FlightNum^6", "Origin^3", "OriginCityName^3", "OriginCountry^2", "OriginRegion", "OriginAirportID^5", "OriginWeather"]}
          />
        </TopBar>
        <LayoutBody>
          <SideBar>
            <HierarchicalMenuFilter
              fields={["Carrier"]}
              title="Carrier"
              id="carrier"
            />
            <RefinementListFilter
              id="Dest"
              title="Destination"
              field="Dest"
              operator="AND"
              size={10}
            />
            <RefinementListFilter
              id="Origin"
              title="Origin"
              field="Origin"
              operator="AND"
              size={10}
            />
          </SideBar>
          <LayoutResults>
            <ActionBar>

              <ActionBarRow>
                <HitsStats/>
              </ActionBarRow>

              <ActionBarRow>
                <SelectedFilters/>
                <ResetFilters/>
              </ActionBarRow>

            </ActionBar>
            <Hits mod="sk-hits-grid" hitsPerPage={10} itemComponent={FlightHit}
            />
            <NoHits/>
          </LayoutResults>
        </LayoutBody>
      </Layout>
    </SearchkitProvider>
  )
}

export default App;
