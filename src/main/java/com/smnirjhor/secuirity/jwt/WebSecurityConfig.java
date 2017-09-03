package com.smnirjhor.secuirity.jwt;

import com.smnirjhor.secuirity.jwt.config.AppAuthenticationEntryPoint;
import com.smnirjhor.secuirity.jwt.config.MyAppUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    public static final String USER = "USER";
    public static final String ADMIN = "ADMIN";

    @Autowired
    private MyAppUserDetailsService myAppUserDetailsService;
    @Autowired
    private AppAuthenticationEntryPoint appAuthenticationEntryPoint;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .cors()
                .and()
                .csrf().disable().authorizeRequests()

                .antMatchers("/guest/**").permitAll()
                .antMatchers("/users/**").permitAll()
                .antMatchers(HttpMethod.GET,"/**").permitAll()

                //.antMatchers(HttpMethod.GET, "/ru/facilities/**").permitAll()
                //.antMatchers(HttpMethod.PUT, "/ru/facilities/**").permitAll()
                //.antMatchers("/user/**").hasRole(USER)
                //.antMatchers("/admin/**").hasRole(ADMIN)

                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterBefore(new JWTLoginFilter("/login", authenticationManager()),
                        UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JWTAuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // Create a default account
        /*auth.inMemoryAuthentication()
                .withUser("admin")
                .password("password")
                .roles("ADMIN");*/

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        auth.userDetailsService(myAppUserDetailsService);//.passwordEncoder(passwordEncoder);

    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PUT", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}