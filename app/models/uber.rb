class Uber < ActiveRecord::Base
  BASE_URL = "https://api.uber.com/v1/estimates/price"

  SERVER_TOKEN = "sjUndGBeIguBtQ0uDl1Z_rJlCqhZEgQ5indoUN0Q"

  def self.find_uber(query)
    # uber_data = HTTParty.get("https://api.uber.com/v1/estimates/price?start_latitude=40.716153&start_longitude=-73.984321&end_latitude=40.7127837&end_longitude=-74.00594130000002", headers: {"Authorization" => "Token sjUndGBeIguBtQ0uDl1Z_rJlCqhZEgQ5indoUN0Q"})
    
    uber_data = HTTParty.get(URI.escape([BASE_URL, "?start_latitude=", query[0], "&start_longitude=", query[1], "&end_latitude=", query[2], "&end_longitude=", query[3]].join('')), headers: {"Authorization" => "Token sjUndGBeIguBtQ0uDl1Z_rJlCqhZEgQ5indoUN0Q"})
   
    uber = uber_data["prices"]

    uber_cars = uber.map do |data|

      name = data["localized_display_name"],
      estimate = data["estimate"]


      {
        name: name[0],
        estimate: estimate
      }
    end
    uber_cars

  end
end

#   def self.request_uber()

#     HTTParty.get("https://login.uber.com/oauth/authorize?response_type=code&client_id=O4Tv-Hk3-I-Fpj81n8xDupzZFFoDKhBX&redirect_uri=http://localhost/oauth_callback")

#   end

# end


# require 'oauth2'
# client = OAuth2::Client.new('O4Tv-Hk3-I-Fpj81n8xDupzZFFoDKhBX', '3G3ea9nm4TMe0o7a3FpDl1bMDi9zXwgRT2gV_PME', :site => 'https://login.uber.com/oauth/authorize')

# client.auth_code.authorize_url(:redirect_uri => 'http://localhost:3000/oauth_callback')
# # => "https://example.org/oauth/authorization?response_type=code&client_id=client_id&redirect_uri=http://localhost:8080/oauth2/callback"

# token = client.auth_code.get_token('FuJ3lRKGxrlbnTtN6KrAThktTxG0dG', :redirect_uri => 'http://localhost:3000/oauth_callback', :headers => {'Authorization' => 'Basic some_password'})

# response = token.get('/api/resource', :params => { 'query_foo' => 'bar' })
# response.class.name
# # => OAuth2::Response



# POST https://api.oauth2server.com/token
#     grant_type=authorization_code&
#     code=AUTH_CODE_HERE&
#     redirect_uri=REDIRECT_URI&
#     client_id=CLIENT_ID&
#     client_secret=CLIENT_SECRET

#     curl -F 'client_secret=YOUR_CLIENT_SECRET' \
#     -F 'client_id=YOUR_CLIENT_ID' \
#     -F 'grant_type=authorization_code' \
#     -F 'redirect_uri=YOUR_REDIRECT_URI' \
#     -F 'code=AUTHORIZATION_CODE' \
#     https://login.uber.com/oauth/token

# uber_token = HTTParty.post("https://login.uber.com/oauth/token?grant_type=refresh_token&code=QRQWAeAgNYYSQ7i95SkWkKzc6Gy05t&redirect_uri=http://localhost:3000/oauth_callback&client_id=O4Tv-Hk3-I-Fpj81n8xDupzZFFoDKhBX&client_secret=3G3ea9nm4TMe0o7a3FpDl1bMDi9zXwgRT2gV_PME")
