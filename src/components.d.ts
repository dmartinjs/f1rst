/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppRaces {
    }
    interface AppRanks {
    }
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface ConstructorDetail {
        /**
          * Id of the constructor
         */
        "constructorId"?: string;
    }
    interface ConstructorRank {
        /**
          * Number of constructors displayed
         */
        "limit": number;
    }
    interface DriverDetail {
        /**
          * Id of the driver
         */
        "driverId"?: string;
    }
    interface DriverRank {
        /**
          * Number of constructors displayed
         */
        "limit": number;
    }
    interface NextRace {
    }
    interface QualifyingResults {
        /**
          * Id of the circuit
         */
        "circuitId"?: string;
    }
    interface RaceDetail {
        /**
          * Id of the circuit
         */
        "circuitId"?: string;
    }
    interface RaceList {
        /**
          * set to `true` if you want to displaya list of past races
         */
        "past": boolean;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRacesElement extends Components.AppRaces, HTMLStencilElement {
    }
    var HTMLAppRacesElement: {
        prototype: HTMLAppRacesElement;
        new (): HTMLAppRacesElement;
    };
    interface HTMLAppRanksElement extends Components.AppRanks, HTMLStencilElement {
    }
    var HTMLAppRanksElement: {
        prototype: HTMLAppRanksElement;
        new (): HTMLAppRanksElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {
    }
    var HTMLAppTabsElement: {
        prototype: HTMLAppTabsElement;
        new (): HTMLAppTabsElement;
    };
    interface HTMLConstructorDetailElement extends Components.ConstructorDetail, HTMLStencilElement {
    }
    var HTMLConstructorDetailElement: {
        prototype: HTMLConstructorDetailElement;
        new (): HTMLConstructorDetailElement;
    };
    interface HTMLConstructorRankElement extends Components.ConstructorRank, HTMLStencilElement {
    }
    var HTMLConstructorRankElement: {
        prototype: HTMLConstructorRankElement;
        new (): HTMLConstructorRankElement;
    };
    interface HTMLDriverDetailElement extends Components.DriverDetail, HTMLStencilElement {
    }
    var HTMLDriverDetailElement: {
        prototype: HTMLDriverDetailElement;
        new (): HTMLDriverDetailElement;
    };
    interface HTMLDriverRankElement extends Components.DriverRank, HTMLStencilElement {
    }
    var HTMLDriverRankElement: {
        prototype: HTMLDriverRankElement;
        new (): HTMLDriverRankElement;
    };
    interface HTMLNextRaceElement extends Components.NextRace, HTMLStencilElement {
    }
    var HTMLNextRaceElement: {
        prototype: HTMLNextRaceElement;
        new (): HTMLNextRaceElement;
    };
    interface HTMLQualifyingResultsElement extends Components.QualifyingResults, HTMLStencilElement {
    }
    var HTMLQualifyingResultsElement: {
        prototype: HTMLQualifyingResultsElement;
        new (): HTMLQualifyingResultsElement;
    };
    interface HTMLRaceDetailElement extends Components.RaceDetail, HTMLStencilElement {
    }
    var HTMLRaceDetailElement: {
        prototype: HTMLRaceDetailElement;
        new (): HTMLRaceDetailElement;
    };
    interface HTMLRaceListElement extends Components.RaceList, HTMLStencilElement {
    }
    var HTMLRaceListElement: {
        prototype: HTMLRaceListElement;
        new (): HTMLRaceListElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-races": HTMLAppRacesElement;
        "app-ranks": HTMLAppRanksElement;
        "app-root": HTMLAppRootElement;
        "app-tabs": HTMLAppTabsElement;
        "constructor-detail": HTMLConstructorDetailElement;
        "constructor-rank": HTMLConstructorRankElement;
        "driver-detail": HTMLDriverDetailElement;
        "driver-rank": HTMLDriverRankElement;
        "next-race": HTMLNextRaceElement;
        "qualifying-results": HTMLQualifyingResultsElement;
        "race-detail": HTMLRaceDetailElement;
        "race-list": HTMLRaceListElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRaces {
    }
    interface AppRanks {
    }
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface ConstructorDetail {
        /**
          * Id of the constructor
         */
        "constructorId"?: string;
    }
    interface ConstructorRank {
        /**
          * Number of constructors displayed
         */
        "limit"?: number;
    }
    interface DriverDetail {
        /**
          * Id of the driver
         */
        "driverId"?: string;
    }
    interface DriverRank {
        /**
          * Number of constructors displayed
         */
        "limit"?: number;
    }
    interface NextRace {
    }
    interface QualifyingResults {
        /**
          * Id of the circuit
         */
        "circuitId"?: string;
    }
    interface RaceDetail {
        /**
          * Id of the circuit
         */
        "circuitId"?: string;
    }
    interface RaceList {
        /**
          * set to `true` if you want to displaya list of past races
         */
        "past"?: boolean;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-races": AppRaces;
        "app-ranks": AppRanks;
        "app-root": AppRoot;
        "app-tabs": AppTabs;
        "constructor-detail": ConstructorDetail;
        "constructor-rank": ConstructorRank;
        "driver-detail": DriverDetail;
        "driver-rank": DriverRank;
        "next-race": NextRace;
        "qualifying-results": QualifyingResults;
        "race-detail": RaceDetail;
        "race-list": RaceList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-races": LocalJSX.AppRaces & JSXBase.HTMLAttributes<HTMLAppRacesElement>;
            "app-ranks": LocalJSX.AppRanks & JSXBase.HTMLAttributes<HTMLAppRanksElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-tabs": LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
            "constructor-detail": LocalJSX.ConstructorDetail & JSXBase.HTMLAttributes<HTMLConstructorDetailElement>;
            "constructor-rank": LocalJSX.ConstructorRank & JSXBase.HTMLAttributes<HTMLConstructorRankElement>;
            "driver-detail": LocalJSX.DriverDetail & JSXBase.HTMLAttributes<HTMLDriverDetailElement>;
            "driver-rank": LocalJSX.DriverRank & JSXBase.HTMLAttributes<HTMLDriverRankElement>;
            "next-race": LocalJSX.NextRace & JSXBase.HTMLAttributes<HTMLNextRaceElement>;
            "qualifying-results": LocalJSX.QualifyingResults & JSXBase.HTMLAttributes<HTMLQualifyingResultsElement>;
            "race-detail": LocalJSX.RaceDetail & JSXBase.HTMLAttributes<HTMLRaceDetailElement>;
            "race-list": LocalJSX.RaceList & JSXBase.HTMLAttributes<HTMLRaceListElement>;
        }
    }
}
