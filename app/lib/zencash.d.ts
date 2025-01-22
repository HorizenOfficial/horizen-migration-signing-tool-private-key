// zencashjs doesn't provide types, throwing an error on build time
// we need to declare the module in order to avoid this error
declare module "zencashjs" {
  export default zencashjs;
}
