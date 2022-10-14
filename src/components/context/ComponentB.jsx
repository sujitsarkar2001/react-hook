import { UserContext, DesignationContext } from "./main";

export default function ComponentB() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <DesignationContext.Consumer>
              {({designation}) => {
                return (
                  <div>
                    User context value {user} and designation {designation}
                  </div>
                );
              }}
            </DesignationContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
