import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props:any) => (
    <ContentLoader
        speed={2}
        width={280}
        height={415}
        viewBox="0 0 280 415"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="14" rx="11" ry="11" width="280" height="221" />
        <rect x="4" y="252" rx="11" ry="11" width="274" height="32" />
        <rect x="2" y="297" rx="11" ry="11" width="277" height="52" />
        <rect x="4" y="377" rx="11" ry="11" width="112" height="27" />
        <rect x="142" y="366" rx="11" ry="11" width="131" height="42" />
    </ContentLoader>
)

export default Skeleton