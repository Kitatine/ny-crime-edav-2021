plot_missing<-function(df, percent)
{
  # Compute the square of integer `n`
  missing_patterns <- data.frame(is.na(df)) %>%
    group_by_all() %>%
    count(name = "count", sort = TRUE) %>%
    ungroup()
  n <- ncol(df)
  m <- nrow(df)
  
  missing_patterns$pattern <- as.factor(1:nrow(missing_patterns))
    
  complete_pattern_index <- 0
  patterns_count <- dim(missing_patterns)[1]
  for(i in 1:patterns_count) {
    if(all(missing_patterns[i, 1:n]== FALSE)){
      complete_pattern_index <-  as.integer(missing_patterns$pattern[i])
    }
  }
  

  # from column mpg to carb build the tidy version of missing pattern
  tidy_missing_patterns <- 
    missing_patterns %>% gather(variable, missing, 1:n) %>%
    mutate(missing = ifelse(missing, 1, 0))
  
  # arrange the row by decreasing order of counts
  tidy_ordered_variables <- 
    tidy_missing_patterns %>% group_by(variable) %>% summarise(counts = sum(count * missing)) %>% arrange(-counts)
  
  tidy_missing_patterns$variable <- 
    factor(tidy_missing_patterns$variable, levels = tidy_ordered_variables$variable)
  
  
  # ********** add percentage  **********
  tidy_ordered_variables <- tidy_ordered_variables %>% mutate(percentage = counts/m * 100)
  
  missing_patterns <- missing_patterns %>% mutate(percentage = count/sum(count) * 100)
  

  if(percent == TRUE){
    p1 <-
      ggplot(tidy_ordered_variables, aes(x = reorder(variable, -percentage), y = percentage)) +
      xlab('') + 
      ylim(0, 100)+
      ylab('% rows missing') +
      geom_bar(stat = 'identity', fill = '#9eb6ee') 
      
  }else{
    
    p1 <-
      ggplot(tidy_ordered_variables, aes(x = reorder(variable, -counts), y = counts)) +
      xlab('') + 
      ylab('num rows missing') +
      geom_bar(stat = 'identity', fill = '#9eb6ee') +
      scale_y_continuous( breaks = c(0,10, 20))
  }
  
  p2 <- 
    ggplot(tidy_missing_patterns, aes(x = variable, y = fct_rev(pattern), fill = missing)) +
    labs(y = 'pattern', x = 'variable') +
    geom_tile(color = 'white') +
    scale_fill_gradient(low = "grey80", high = "#b29fe1", na.value = "black") +
    theme_bw() +
    theme(legend.position = "None")
  
  if (complete_pattern_index > 0){
    complete_y <- patterns_count + 1 - complete_pattern_index
    p2 <- p2 +
      geom_rect(xmin=0.5,
                xmax=length(unique(tidy_missing_patterns$variable)) + 0.5,
                ymin= complete_y - 0.5,
                ymax= complete_y + 0.5,
                fill='dark gray') +
      
      ggplot2::annotate('text', 
               x = n/2, y = complete_y,
               label = 'complete cases',
               size = 5.5)
    
  }
  
  if(percent == TRUE){
    p3 <- 
      ggplot(missing_patterns, aes(x = reorder(fct_rev(pattern), percentage), y = percentage)) +
      xlab('') + 
      ylab('% rows') +
      ylim(0, 100)+
      geom_bar(stat = 'identity', fill = '#9eb6ee') + 
      coord_flip()
    
    
  }else{
    p3 <- 
      ggplot(missing_patterns, aes(x = reorder(fct_rev(pattern), count), y = count)) +
      xlab('') + 
      ylab('row count') +
      geom_bar(stat = 'identity', fill = '#9eb6ee') + 
      coord_flip()
    
  }
  
 
  p4 <- (p1 + plot_spacer()) + plot_layout(widths = c(4,1))
  p5 <- p2 + p3 + plot_layout(widths = c(5,1))
  p4 / p5 + plot_layout(heights = c(3,16))
  #result <- complete_pattern_index
}

