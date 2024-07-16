import SideBar from "@/app/(afterLogin)/_component/SideBar/SideBar";
import "@/app/styles/globals.scss";
import classes from "./layout.module.scss";
import RightContents from "@/app/(afterLogin)/_component/RightContents";
import LoadingPage from "@/app/component/Loading/LoadingPage";

export default function AfterLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body className={classes.bodyAlign}>
        {modal}
        <div className={classes.mainGrid}>
          {/* sider bar */}
          <SideBar />
          <div className={classes.rightWrapper}>
            <div className={classes.contentsArea}>{children}</div>
            <div className={classes.rightSection}>
              <RightContents />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
