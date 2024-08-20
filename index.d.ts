declare namespace Microsoft {
  /**
   * The app profile manager JavaScript API Reference includes methods and properties to manage tabs and sessions in Customer Service workspace.
   * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/microsoft-apm External Link: App profile manager JavaScript API Reference}
   */
  namespace Apm {
    /**
     * Returns the session object of the session that is in focus.
     * @returns Session as an object.
     * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/getfocusedsession External Link: getFocusedSession (app profile manager)}
     */
    export function getFocusedSession(): Session;
    /**
     * Returns the unique identifier of all sessions.
     * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/getallsessions External Link: getAllSessions (app profile manager)}
     */
    export function getAllSessions(): string[];
    /**
     * Returns the session object for a session ID.
     * @returns Session as an object.
     * @param sessionId The session ID
     * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/getsession External Link: getSession  (app profile manager)}
     */
    export function getSession(sessionId: string): Session;
    /**
     * Creates a session based on a session template and returns the unique identifier of the session.
     * @param sessionInput JSON input properties of the session to be created.
     * @returns Session identifier as String.
     * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/createsession External Link: createSession (app profile manager)}
     */
    export function createSession(sessionInput: SessionInput): string;
    /**
     * Allows you to check whether a new session can be created.
     * @returns A Boolean value of true if a new session can be created; otherwise, false.
     * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/cancreatesession External Link: canCreateSession (app profile manager)}
     */
    export function canCreateSession(): boolean;
    /**
     * Creates an app tab in a `focused session` and returns the unique identifier of the tab.
     * @param appTabInput JSON input properties of the tab to be created.
     * @returns Tab identifier as String.
     * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/createtab External Link: createTab (app profile manager)}
     */
    export function createTab(appTabInput: AppTabInput): string;
    /**
     * Closes the specified app tab in the `current session`.
     * @param tabId Unique identifier of the tab to be closed.
     * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/closetab External Link: closeTab (app profile manager)}
     */
    export function closeTab(tabId: string): void;
    /**
     * Sets the focus on a specified tab in the `current session`.
     * @param tabId Unique identifier of the tab to be focused.
     * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/focustab External Link: focusTab (app profile manager)}
     */
    export function focusTab(tabId: string): void;
    /**
     * Refreshes the app tab in the `current session`.
     * @param tabId Unique identifier of the tab that has to be refreshed.
     * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/refreshtab External Link: refreshTab (app profile manager)}
     */
    export function refreshTab(tabId: string): void;

    /**
     * Returns a unique topic name for a given event in multisession.
     * @param eventName
     * @returns A string that represents the unique topic name for the specified event in the current Customer Service workspace session.
     */
    export function getEventPublisherTopic(
      eventName: "ON_SESSION_SWITCH" | "ON_SESSION_CLOSED"
    ): string;

    interface AppTabInput {
      /** Unique Name of the Application Tab Template */
      templateName: string;
      /** additional context for tab creation and tab slugs */
      appContext?: Map<string, string>;
      /** should this tab be focused after creation */
      isFocused?: boolean;
    }
    interface SessionInput {
      /**
       * Returns the name of the template used in the session
       */
      templateName: string;
      /**
       * additional information for session creation
       */
      sessionContext: Map<string, string>;
      /**
       * will focus after session is created
       */
      isFocused?: boolean;
    }

    interface Session {
      /**
       * The ID of a session.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/properties/sessionid External Link: sessionId (app profile manager)}
       */
      sessionId: string;
      /**
       * Boolean value indicating whether a session is the Home session.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/properties/isdefault External Link: isDefault (app profile manager)}
       */
      isDefault: boolean;
      /**
       * Boolean value indicating whether a session can be closed.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/properties/canclosesession External Link: canClose (app profile manager session)}
       */
      canClose: boolean;
      /**
       * The text label of a session.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/properties/sessiontitle External Link: title (app profile manager session)}
       */
      title: string;
      /**
       * Closes a session.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/close External Link: close (app profile manager)}
       */
      close(): void;
      /**
       * Sets the focus on a session.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/focus External Link: focus (app profile manager)}
       */
      focus(): void;
      /**
       * Shows a notification indicator on a session if the session is not in focus.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/requestfocus External Link: requestFocus (app profile manager)}
       */
      requestFocus(): void;
      /**
       * Returns the tab object of the tab that is in focus.
       * @returns The tab object.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/getfocusedtab External Link: getFocusedTab (app profile manager)}
       */
      getFocusedTab(): Tab;
      /**
       * Returns the unique identifiers of all tabs for a specified session.
       * @returns Collection of tab identifiers.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/getalltabs External Link: getAllTabs (app profile manager)}
       */
      getAllTabs(): string[];
      /**
       * Returns the tab object for a tab identifier.
       * @param tabId The identifier of a tab.
       * @returns Returns the tab object of the requested tab
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/gettab External Link: getTab (app profile manager)}
       */
      getTab(tabId: string): Tab;
      /**
       * Allows you to check whether a new tab can be created in a session.
       * @returns A Boolean value of true if a new tab can be created; otherwise, false.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/cancreatetab External Link: canCreateTab (app profile manager)}
       */
      canCreateTab(): boolean;
      /**
       * Allows you to set the automation dictionary and enables providers to add, modify, and remove values of slugs; the updated values are then available for invoking macros in the future.
       * @param input JSON input properties of the session context to be updated.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/properties/updatecontext External Link: updateContext (app profile manager)}
       */
      updateContext(input: Map<string, string>): void;    
      /**
       *
       * @param input Session context variable to be retrieved.
       */
      resolveSlug(input: `{${string}}`): string;
    }

    interface Tab {
      /**
       * The identifier of a tab.
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/properties/tabid External Link: tabID (app profile manager)}
       */
      tabId: string;
      canClose(): boolean;
      title: string;
      /**
       * Sets the focus on this tab
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/focustab#set-a-tab-in-focus-using-microsoftapmgetfocusedsessiongettabfocus External Link: focusTab (app profile manager)}
       */
      focus(): void;
      /**
       * Refresh this tab
       * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/methods/refreshtab#refresh-a-tab-using-refresh-method External Link: refreshTab (app profile manager)}
       */
      refresh(): void;
    }

    namespace EventData {
      /**
         * This event is invoked by the client when a session is switched to another session. This event allows client-side handlers to react to session switches, updating the user interface or internal state as necessary. ON_SESSION_SWITCH event takes the following eventData
         * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/events/on_session_switch External Link: ON_SESSION_SWITCH event (app profile manager)}
         * @example
         * 
            // Define a handler function that's triggered when the session is switched
            let sessionSwitchedHandlerFunction = function(eventInput:MessageEvent<Microsoft.Apm.EventData.SessionSwitch>) {
                // Log the previous and new session IDs to the console
                console.log("Previous session:  " + eventInput.data.previousSessionId +
                            " - Current session: " + eventInput.data.newSessionId);

            }; 
            // Retrieve the event topic specific to session switching from the API
            let sessionSwitchTopic = Microsoft.Apm.getEventPublisherTopic("ON_SESSION_SWITCH");
            // Create a new broadcast channel to subscribe to session switch events
            let sessionSwitchSubscriber = new BroadcastChannel(sessionSwitchTopic);
            // Attach the session switched handler function to the message event of the subscriber
            sessionSwitchSubscriber.onmessage = sessionSwitchedHandlerFunction;
        */
      export interface SessionSwitch {
        /**
         * The session ID of the previous session.
         */
        previousSessionId: string;
        /**
         * The ID of the session that's now focused.
         */
        newSessionId: string;
      }

      /**
         * This event is invoked by the client when a session is closed. This event provides an opportunity to perform clean-up tasks or update the application state in response to session closure. ON_SESSION_CLOSED event takes the following eventData
         * @see {@link https://learn.microsoft.com/dynamics365/customer-service/develop/reference/events/on_session_closed External Link: ON_SESSION_CLOSED event (app profile manager)}
         * @example
         * 
            // Define a handler function that's triggered when a session is closed
            let sessionClosedHandlerFunction = function(eventInput: MessageEvent<Microsoft.Apm.EventData.SessionClosed>) {
                // Log the ID of the closed session to the console
                console.log("Session closed: " + eventInput.data.sessionId);
            };
            
            // Retrieve the event topic specific to session closing from the API
            let sessionCloseTopic = Microsoft.Apm.getEventPublisherTopic("ON_SESSION_CLOSED");
            // Create a new broadcast channel to subscribe to session close events
            let sessionCloseSubscriber = new BroadcastChannel(sessionCloseTopic);
            // Attach the session closed handler function to the message event of the subscriber
            sessionCloseSubscriber.onmessage = sessionClosedHandlerFunction;
         */
      export interface SessionClosed {
        /**
         * The session ID of session that was closed.
         */
        sessionId: string;
      }
    }
  }
}
